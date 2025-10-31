"use client"

import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { useState } from "react"
import { CategoryFilter } from "@/components/category-filter"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Discover Amazing Products</h1>
          <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl text-pretty">
            Browse our curated collection of quality products from various categories
          </p>
        </div>
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
    </div>
  )
}
