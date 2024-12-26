import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        console.log('ExampleComponent mounted');
    }, []);
    return (
      <div>
          <h1>Example Component</h1>
      </div>
    );
};

export default ExampleComponent;