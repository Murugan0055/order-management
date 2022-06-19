import ErrorBoundary from "./errorHandling/ErrorHandling";
import ViewAllOrder from "./orderManagement/viewAllOrders";
function App() {
  return (
    <ErrorBoundary>
      <ViewAllOrder></ViewAllOrder>
    </ErrorBoundary>
  );
}

export default App;
