import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* new chat goes here */}
          <NewChat />
          <div>{/* model selection */}</div>
          {/* map through chatrows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
