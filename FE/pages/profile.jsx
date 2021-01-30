import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <p>
        Hello, my name is {router.query.name}. I use next.js
      </p>
    </div>
  );
}