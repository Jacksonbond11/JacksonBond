import React, { useEffect, useState, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import RelationshipEditor from "./RelationshipEditor.jsx";

const Neo4jGraph = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState(null);

  const graphContainerRef = useRef(null);
  const [graphWidth, setGraphWidth] = useState(0);
  const [graphHeight, setGraphHeight] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/graph");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching graph data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const updateGraphDimensions = () => {
      if (graphContainerRef.current) {
        setGraphWidth(graphContainerRef.current.offsetWidth);
        setGraphHeight(graphContainerRef.current.offsetHeight);
      }
    };

    updateGraphDimensions();
    window.addEventListener("resize", updateGraphDimensions);

    return () => window.removeEventListener("resize", updateGraphDimensions);
  }, [selectedNode]);

  const handleNodeClick = (node) => { console.log("clicked node: ", selectedNode); setSelectedNode(node); }
  const handleBackgroundClick = () => setSelectedNode(null);

  const handleUpdateRelationship = async (relationship, newTargetId) => {
    try {
      const sourceId =
        typeof relationship.source === "object"
          ? relationship.source.id
          : relationship.source;

      const oldTargetId =
        typeof relationship.target === "object"
          ? relationship.target.id
          : relationship.target;

      await fetch("/api/update-relationship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceId: parseInt(sourceId),
          oldTargetId: parseInt(oldTargetId),
          newTargetId: parseInt(newTargetId),
          relType: relationship.label,
        }),
      });

      fetchData();
    } catch (error) {
      console.error("Error updating relationship:", error);
    }
  };

  return (
    <div className="w-full h-[800px] flex flex-col border border-gray-300 relative overflow-hidden">
      {/* GRAPH */}
      <div
        ref={graphContainerRef}
        className="bg-white"
        style={{ height: "400px", width: "100%" }}
      >

        <ForceGraph2D
          width={graphWidth}
          height={graphHeight}
          graphData={data}
          onNodeClick={handleNodeClick}
          onBackgroundClick={handleBackgroundClick}
          nodeAutoColorBy={(node) => node.labels?.[0] || "unknown"}
          cooldownTime={1500}
          d3VelocityDecay={0.28}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.name || node.description || node.labels?.[0] || node.id;
            const radius = 14 / globalScale;

            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = node.color || "#4f83ff";
            ctx.fill();

            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Inter, sans-serif`;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#111";
            ctx.fillText(label, node.x + radius + 4, node.y);
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
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
            ctx.font = `${fontSize}px Inter, sans-serif`;
            ctx.fillStyle = "#555";
            ctx.fillText(label, x, y);
          }}
        />
      </div>

      {/* SIDEBAR */}
      {selectedNode && selectedNode.labels.includes("Task") && (
        <div className=" z-20 relative bg-gray-50 border-l border-gray-300 p-4 overflow-y-auto shadow-inner">
          <h2 className="text-xl font-semibold mb-4">Node Details</h2>

          <div className="mb-4">
            <h3 className="font-medium text-gray-700">Type</h3>
            <div className="text-gray-900">{selectedNode.labels?.join(", ")}</div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-1">Properties</h3>
            <div className="space-y-1">
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
                  <div key={key} className="text-sm">
                    <strong className="text-gray-800">{key}:</strong>{" "}
                    <span className="text-gray-600">{String(value)}</span>
                  </div>
                ))}
            </div>
          </div>

          <div>
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
        </div>
      )}
    </div>
  );
};

export default Neo4jGraph;