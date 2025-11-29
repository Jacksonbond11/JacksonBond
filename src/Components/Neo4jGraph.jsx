import React, { useEffect, useState, useRef } from "react";
import neo4j from "neo4j-driver";
import ForceGraph2D from "react-force-graph-2d";
import RelationshipEditor from "./RelationshipEditor.jsx";

const Neo4jGraph = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState(null);
  const driverRef = useRef(null);

  const graphContainerRef = useRef(null);
  const [graphWidth, setGraphWidth] = useState(0);
  const [graphHeight, setGraphHeight] = useState(0);

  const fetchData = async () => {
    const session = driverRef.current.session();
    try {
      const result = await session.run(`
        MATCH (n)-[r]->(m)
        RETURN n, labels(n) AS nLabels,
               r, type(r) AS rType,
               m, labels(m) AS mLabels
      `);

      const nodes = new Map();
      const links = [];

      result.records.forEach((record) => {
        const n = record.get("n");
        const m = record.get("m");

        const nLabels = record.get("nLabels");
        const mLabels = record.get("mLabels");
        const rType = record.get("rType");

        nodes.set(n.identity.toString(), {
          id: n.identity.toString(),
          labels: nLabels,
          ...n.properties,
        });

        nodes.set(m.identity.toString(), {
          id: m.identity.toString(),
          labels: mLabels,
          ...m.properties,
        });

        links.push({
          source: n.identity.toString(),
          target: m.identity.toString(),
          label: rType,
        });
      });

      const populatedLinks = links.map((link) => ({
        ...link,
        source: nodes.get(link.source),
        target: nodes.get(link.target),
      }));

      setData({ nodes: Array.from(nodes.values()), links: populatedLinks });
    } catch (err) {
      console.error(err);
    } finally {
      session.close();
    }
  };

  useEffect(() => {
    const uri = "bolt://147.182.193.131:7687";
    const user = "";
    const password = "";

    driverRef.current = neo4j.driver(uri, neo4j.auth.basic(user, password));

    fetchData();

    return () => driverRef.current?.close();
  }, []);

  useEffect(() => {
    const updateGraphDimensions = () => {
      if (graphContainerRef.current) {
        setGraphWidth(graphContainerRef.current.offsetWidth / 2);
        setGraphHeight(graphContainerRef.current.offsetHeight);
      }
    };

    updateGraphDimensions();
    window.addEventListener("resize", updateGraphDimensions);

    return () => window.removeEventListener("resize", updateGraphDimensions);
  }, [selectedNode]); // Re-measure when sidebar visibility changes

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleBackgroundClick = () => {
    setSelectedNode(null);
  };

  const handleUpdateRelationship = async (relationship, newTargetId) => {
    const session = driverRef.current.session();
    try {
      // The relationship object from react-force-graph might have circular references.
      // We should only use the IDs.
      const sourceId =
        typeof relationship.source === "object"
          ? relationship.source.id
          : relationship.source;
      const oldTargetId =
        typeof relationship.target === "object"
          ? relationship.target.id
          : relationship.target;

      await session.run(
        `
        MATCH (a)-[r]->(b)
        WHERE id(a) = $sourceId AND id(b) = $oldTargetId AND type(r) = $relType
        DELETE r
        WITH a
        MATCH (c)
        WHERE id(c) = $newTargetId
        CREATE (a)-[new_r:\`${relationship.label}\`]->(c)
        `,
        {
          sourceId: parseInt(sourceId),
          oldTargetId: parseInt(oldTargetId),
          newTargetId: parseInt(newTargetId),
          relType: relationship.label,
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error updating relationship:", error);
    } finally {
      session.close();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "800px",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      {/* ------- GRAPH ------- */}
      <div ref={graphContainerRef} style={{ flex: 1 }}>
        <ForceGraph2D
          width={graphWidth}
          height={graphHeight}
          graphData={data}
          onNodeClick={handleNodeClick}
          onBackgroundClick={handleBackgroundClick}
          nodeAutoColorBy={(node) => node.labels?.[0] || "unknown"}
          cooldownTime={2000}
          d3VelocityDecay={0.3}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label =
              node.name || node.description || node.labels?.[0] || node.id;

            const radius = 6 / globalScale;

            // Draw circle
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = node.color || "steelblue";
            ctx.fill();

            // Label
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(label, node.x + radius + 4, node.y);
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
            ctx.fill();
          }}
          linkCanvasObjectMode={() => "after"}
          linkCanvasObject={(link, ctx, globalScale) => {
            const label = link.label;
            if (!label) return;
            const start = link.source;
            const end = link.target;
            if (!start || !end) return;

            const x = (start.x + end.x) / 2;
            const y = (start.y + end.y) / 2;

            const fontSize = 10 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.fillStyle = "gray";
            ctx.fillText(label, x, y);
          }}
        />
      </div>

      {/* ------- SIDEBAR ------- */}
      {selectedNode && (
        <div
          style={{
            width: "300px",
            background: "#f7f7f7",
            borderLeft: "1px solid #ccc",
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Node Details</h2>

          <h3>Type</h3>
          <div>{selectedNode.labels?.join(", ")}</div>

          <h3 style={{ marginTop: "16px" }}>Properties</h3>
          {Object.entries(selectedNode)
            .filter(
              ([key]) =>
                ![
                  "x",
                  "y",
                  "vx",
                  "vy",
                  "fx",
                  "fy",
                  "color",
                  "labels",
                  "index",
                  "__indexColor",
                ].includes(key)
            )
            .map(([key, value]) => (
              <div key={key} style={{ marginBottom: "6px" }}>
                <strong>{key}:</strong> {String(value)}
              </div>
            ))}

          <h3 style={{ marginTop: "16px" }}>Relationships</h3>
          {data.links
            .filter((l) => l.source && l.source.id === selectedNode.id)
            .map((l, i) => (
              <RelationshipEditor
                key={i}
                relationship={l}
                allNodes={data.nodes}
                onUpdate={handleUpdateRelationship}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Neo4jGraph;
