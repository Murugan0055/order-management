import ErrorBoundary from "./errorHandling/ErrorHandling";
import ViewAllOrder from "./orderManagement/viewAllOrder/viewAllOrders";
function App() {
  return (
    <ErrorBoundary>
      <ViewAllOrder></ViewAllOrder>
    </ErrorBoundary>
  );
}

export default App;
