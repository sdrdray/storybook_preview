import React from 'react';

interface SimpleViewWebsiteProps {
  // Define any props if needed
}

const SimpleViewWebsite: React.FC<SimpleViewWebsiteProps> = () => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      color: '#333',
      padding: '20px',
      borderRadius: '8px',
      fontFamily: 'sans-serif',
      maxWidth: '600px',
      margin: '20px auto'
    }}>
      <h1 style={{ color: '#555' }}>Simple View Website</h1>
      <p>This is a basic representation of a simple view website.</p>
      <p>Content is minimal and easy to read.</p>
      <div style={{
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '1px solid #ccc',
        fontSize: '0.9em'
      }}>
        <p>Simple footer information.</p>
      </div>
    </div>
  );
};

export default SimpleViewWebsite; 