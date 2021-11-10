import { useRouter } from 'next/router';

function ClientIDIndex() {
  const router = useRouter();

  //Functions
  
  //Navigate to a project page
  function loadProjectHandler() {
    router.push('/clients/1/project') //Javascript Code - Similar to using Link
  }

  //Page Render
  return (
    <div>
      <h1>Default landing page for Client ID</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientIDIndex;
