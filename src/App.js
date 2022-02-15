import AnecdoteList from "./components/anecdotelist";
import AnecdoteForm from "./components/anecdotesform";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  );
};

export default App;
