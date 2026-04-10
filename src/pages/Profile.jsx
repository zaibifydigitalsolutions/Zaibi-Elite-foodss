import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { User } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Success! You are now signed up.');
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) return <div className="container p-3 text-center">Loading...</div>;

  if (!user) {
    return (
      <div className="container" style={{ paddingBottom: '80px' }}>
        <h2 className="mb-3 text-center mt-3">Welcome to Zaibi Elite</h2>
        <div className="card" style={{ padding: '24px' }}>
            <h3 className="mb-2">Login / Register</h3>
            <input 
                type="email" 
                placeholder="Email Address" 
                className="mb-2"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="mb-3"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div className="flex-between gap-1">
                <button className="btn-secondary" onClick={handleSignUp}>Sign Up</button>
                <button className="btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
        <h2 className="mb-3">Profile</h2>
        <div className="flex-center flex-column mb-3">
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginBottom: '16px', background: 'var(--surface)', display:'flex', alignItems:'center', justifyContent: 'center' }}>
                <User size={48} color="var(--primary)" />
            </div>
            <h3 style={{ marginBottom: '4px' }}>Logged In User</h3>
            <p className="text-secondary">{user.email}</p>
        </div>
        
        <div className="card mb-2" style={{ padding: '16px' }}>
            <h4>My Orders</h4>
            <p className="text-secondary mt-1">View your order history</p>
        </div>
        <div className="card mb-2" style={{ padding: '16px' }}>
            <h4>Saved Addresses</h4>
            <p className="text-secondary mt-1">Manage delivery locations</p>
        </div>
        <div className="card mb-2" style={{ padding: '16px' }}>
            <h4>Payment Methods</h4>
            <p className="text-secondary mt-1">Update billing info</p>
        </div>
        <button className="btn-secondary mt-3" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
