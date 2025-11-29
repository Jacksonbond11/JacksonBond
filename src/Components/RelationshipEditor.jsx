import React, { useEffect, useState } from 'react';

const RelationshipEditor = ({ relationship, allNodes, onUpdate }) => {
    const [newTargetId, setNewTargetId] = useState(relationship.target.id);

    const handleUpdate = () => {
        onUpdate(relationship, newTargetId);
    };

    const handleMarkDone = () => {
        onUpdate(relationship, newTargetId);
    };

    return (
        <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <div>
                <strong>{relationship.source.description}</strong>
            </div>
            <div>
                <span>Parent Entity: <b>{relationship.target.name}</b></span>
            </div>
            <div>
                <p>Change parent node:</p>
                <select
                    value={newTargetId}
                    onChange={(e) => setNewTargetId(e.target.value)}
                    style={{ width: '100%', marginTop: '5px' }}
                >
                    {allNodes.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.name || node.id}
                        </option>
                    ))}
                </select>
            </div>
            <div className="gap-2">

                <button
                    onClick={handleUpdate}
                    style={{ marginTop: '5px', width: '48%', padding: '5px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Update
                </button>
                <button onClick={handleMarkDone}  style={{ marginTop: '5px', width: '48%', padding: '5px', background: '#2100b6ff', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Mark Done
                </button>
            </div>
        </div>
    );
};

export default RelationshipEditor;
