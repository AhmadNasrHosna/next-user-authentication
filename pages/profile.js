import { useEffect, useState } from "react";
import { getUserProfile } from "../lib/auth";
import Layout from "../components/Layout";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getUserProfile().then((user) => setUserProfile(user));
  }, []);

  if (!userProfile) {
    return (
      <Layout pageTitle="..." docTitle="..." userFullName="...">
        <p>Loading profile...</p>
      </Layout>
    );
  }

  return (
    <Layout
      pageTitle={`${userProfile.user.name} profile`}
      docTitle={`${userProfile.user.name} profile`}
      userFullName={userProfile.user.name}
    >
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </Layout>
  );
}

export default Profile;
