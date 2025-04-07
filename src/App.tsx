import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TagInput } from './components/TagInput';

function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="App">
    <h1>Tag Input</h1>
    <TagInput
      value={tags}
      onChange={setTags}
      separator=",/-"
      maxTags={5}
      placeholder="Enter tags"
    />

    <div style={{ marginTop: "1rem" }}>
      <strong>Current Tags:</strong> {tags.join(", ")}
    </div>
  </div>
  )
}

export default App
