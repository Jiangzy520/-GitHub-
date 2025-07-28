"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 模拟登录
    setTimeout(() => {
      setLoading(false);
      // 简单验证
      if (formData.email && formData.password) {
        // 模拟成功登录
        router.push("/nft-miners");
      } else {
        setError("请填写所有必填字段");
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#f0f5fa] py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-12 h-12 mr-2">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="18" cy="18" r="18" fill="#7B4DDC" />
                <path d="M18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9ZM18 24.3529C14.4847 24.3529 11.6471 21.5153 11.6471 18C11.6471 14.4847 14.4847 11.6471 18 11.6471C21.5153 11.6471 24.3529 14.4847 24.3529 18C24.3529 21.5153 21.5153 24.3529 18 24.3529Z" fill="white" />
                <path d="M18 14.2941C15.9435 14.2941 14.2941 15.9435 14.2941 18C14.2941 20.0565 15.9435 21.7059 18 21.7059C20.0565 21.7059 21.7059 20.0565 21.7059 18C21.7059 15.9435 20.0565 14.2941 18 14.2941ZM18 19.0588C17.4024 19.0588 16.9412 18.5976 16.9412 18C16.9412 17.4024 17.4024 16.9412 18 16.9412C18.5976 16.9412 19.0588 17.4024 19.0588 18C19.0588 18.5976 18.5976 19.0588 18 19.0588Z" fill="white" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">登录到 GoMining</h1>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                电子邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b4ddc] focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  密码
                </label>
                <Link href="/forgot-password" className="text-sm text-[#7b4ddc] hover:underline">
                  忘记密码?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b4ddc] focus:border-transparent"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#7b4ddc] hover:bg-[#6a3dcb]"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  登录中...
                </span>
              ) : (
                "登录"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              没有账号?{" "}
              <Link href="/register" className="text-[#7b4ddc] hover:underline">
                注册
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
