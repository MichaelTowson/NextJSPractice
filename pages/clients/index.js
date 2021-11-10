import Link from "next/link";

function ClientsIndex() {
  const clients = [
    {id: '1', name: 'Maximilian'},
    {id: '2', name: 'Michael'},
  ]

  return (
    <div>
      <h1>Default landing page for Clients</h1>
      <ul>
        {clients.map((client) => ( 
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsIndex;
