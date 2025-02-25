"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Faq } from "@/components/faq";
import { Button } from "@/components/ui/button";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Stream Differently
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                Welcome to Jetflix - where innovation meets entertainment.
                Discover a new era of streaming with our curated content
                and cutting-edge technology.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-gray-600">
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {['4K Streaming', 'AI Recommendations', 'Offline Viewing'].map((feature) => (
              <div key={feature} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Find answers to common questions about our streaming service.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}