const { useState } = React;

    function Counter({ id }) {
      const [count, setCount] = useState(0);

      return (
        <div className="card text-center mb-4">
          <div className="card-body">
            <h5 className="card-title">Counter {id}</h5>
            <p className="card-text">{count}</p>
            <button className="btn btn-neon" onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        </div>
      );
    }

    function CounterOfCounters() {
      const [counters, setCounters] = useState([]);

      const addCounter = () => {
        setCounters([...counters, counters.length + 1]);
      };

      return (
        <div>
          <button className="btn btn-create mb-4" onClick={addCounter}>Create Counter</button>
          <div className="row">
            {counters.map((counterId) => (
              <div key={counterId} className="col-md-4">
                <Counter id={counterId} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    ReactDOM.render(<CounterOfCounters />, document.getElementById('root'));