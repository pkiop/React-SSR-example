import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = props => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = () => (
  <Layout>
    <h1>Friends List</h1>
    <ProfileLink profile="Jake" />
    <ProfileLink profile="Peter" />
    <ProfileLink profile="Yumi" />
  </Layout>
);

export default Index;