import neo4j from "neo4j-driver";

export default async function handler(req, res) {

  console.log("🔥 API START ------------------------------");

  console.log("env.NEO4J_URL =", process.env.NEO4J_URL);
  console.log("env.NEO4J_USER =", process.env.NEO4J_USER);
  console.log("env.NEO4J_PASS =", process.env.NEO4J_PASS ? "***" : "undefined");


  console.log("1️⃣  Creating Neo4j driver...");
  let driver;
  try {
    driver = neo4j.driver(
      process.env.NEO4J_URL,
      neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
    );
  } catch (err) {
    console.log("❌ ERROR creating driver:", err);
    return res.status(500).json({ error: "Driver creation failed", detail: err.message });
  }
  console.log("✔ Driver created");


  console.log("2️⃣  Opening session...");
  let session;
  try {
    session = driver.session();
  } catch (err) {
    console.log("❌ ERROR opening session:", err);
    return res.status(500).json({ error: "Session failed", detail: err.message });
  }
  console.log("✔ Session opened");


  console.log("3️⃣  Running MATCH query...");
  let result;
  try {
    result = await session.run(`
      MATCH (n)-[r]->(m)
      RETURN n, labels(n) AS nLabels,
             r, type(r) AS rType,
             m, labels(m) AS mLabels
    `);
    console.log("✔ Query completed");
    console.log("   number of records:", result.records.length);
  } catch (err) {
    console.log("❌ ERROR running query:", err);
    return res.status(500).json({ error: "Query failed", detail: err.message });
  }


  console.log("4️⃣  Processing records...");
  const nodes = new Map();
  const links = [];

  try {
    result.records.forEach(record => {
      const n = record.get("n");
      const m = record.get("m");

      nodes.set(n.identity.toString(), {
        id: n.identity.toString(),
        labels: record.get("nLabels"),
        ...n.properties,
      });

      nodes.set(m.identity.toString(), {
        id: m.identity.toString(),
        labels: record.get("mLabels"),
        ...m.properties,
      });

      links.push({
        source: n.identity.toString(),
        target: m.identity.toString(),
        label: record.get("rType"),
      });
    });
    console.log("✔ Records processed");
  } catch (err) {
    console.log("❌ ERROR processing records:", err);
    return res.status(500).json({ error: "Processing failed", detail: err.message });
  }


  console.log("5️⃣  Closing session...");
  try {
    await session.close();
    console.log("✔ Session closed");
  } catch (err) {
    console.log("❌ ERROR closing session:", err);
  }


  console.log("6️⃣  Closing driver...");
  try {
    await driver.close();
    console.log("✔ Driver closed");
  } catch (err) {
    console.log("❌ ERROR closing driver:", err);
  }

  console.log("7️⃣  Sending response...");
  try {
    res.json({
      nodes: [...nodes.values()],
      links,
    });
    console.log("✔ Response sent — API DONE ------------------------------");
  } catch (err) {
    console.log("❌ ERROR sending response:", err);
  }
}
