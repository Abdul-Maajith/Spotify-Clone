import { getProviders, signIn } from "next-auth/react";

const login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen justify-center">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Spotify"
      />

      {/* Return values (key-value) pair 
      callback - After login, where will i get redirected!*/}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-lg"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

// Before this pageLoads, we need to render(server-side - must return something) the spotify providers!
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
