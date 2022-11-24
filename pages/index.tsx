import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Home() {
  return <div>teste</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
