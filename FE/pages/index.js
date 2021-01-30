import Link from "next/link";
import Layout from "../components/Layout";

const ProfileLink = props => {
  return(
    <Link href={`/profile?name=${props.name}`}>
      <div>
        {props.name} 입니다.
      </div>
    </Link>
  )
}

const Index = () => (
  <Layout>
    <p>index page</p>
    <ProfileLink name="a"/> 
    <ProfileLink name="b"/> 
    <ProfileLink name="c"/> 
  </Layout>
);

export default Index;