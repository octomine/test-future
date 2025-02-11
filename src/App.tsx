import { SearchInput } from "@/components/search-input";
import { ReposList } from "@/components/repos-list";
import { Message } from "./components/message";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <SearchInput></SearchInput>
      <div className="h-full overflow-hidden relative">
        <ReposList></ReposList>
        <Message></Message>
      </div>
    </div>
  )
}

export default App
