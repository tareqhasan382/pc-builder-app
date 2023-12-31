"use client";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
const login = () => {
  return (
    <>
      <Head>
        <title>Sign in page</title>
        <meta name="sign in page" />
      </Head>
      <div className=" pb-20 h-screen ">
        {/* ========Login===== */}
        <div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000",
              })
            }
            className="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-3 "
          >
            <GithubOutlined style={{ fontSize: "30px" }} />
            GitHub
          </button>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000",
              })
            }
            className="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-3 "
          >
            <GoogleOutlined style={{ fontSize: "30px" }} /> Google
          </button>
        </div>
      </div>
    </>
  );
};

export default login;
/*

"github", {
                callbackUrl: "http://localhost:3000",
              }

====================================================
onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000",
              })
            }
*/
