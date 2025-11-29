import React, { useState } from 'react';

const RelationshipEditor = ({ relationship, allNodes, onUpdate }) => {
    const [newTargetId, setNewTargetId] = useState(relationship.target.id);

    const handleUpdate = () => {
        onUpdate(relationship, newTargetId);
    };

    return (
        <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <div>
                <strong>{relationship.label}</strong>
            </div>
            <div>
                <span>Current Target: {relationship.target.id}</span>
            </div>
            <div>
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
            <button
                onClick={handleUpdate}
                style={{ marginTop: '5px', width: '100%', padding: '5px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Update
            </button>
        </div>
    );
};

export default RelationshipEditor;
