import Layout from "@/components/MainLayout"
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <Layout>
      {children}
    </Layout>
  )
    
};