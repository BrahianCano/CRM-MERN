import { useState } from 'react';
import axios from 'axios';

const UseApi = (method, url, dataNew) => {

    const [result, setResult] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const ApiFunction = async () => {
        try {
            const response = await axios({ method, url, data: dataNew });
            if (response.status !== 200) throw new Error(response.statusText);
            setResult(response);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }

    return {
        result,
        error,
        isLoading,
        ApiFunction
    }
}

export default UseApi;