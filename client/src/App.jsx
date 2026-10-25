import { useEffect, useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const res = await fetch('/api/contacts');
        if (!res.ok) throw new Error('Failed to fetch contacts');
        setContacts(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadContacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((c) => (
            <li key={c._id}>
              {c.name} - {c.email} - {c.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
