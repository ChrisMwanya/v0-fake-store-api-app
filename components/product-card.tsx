"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <CardContent className="p-0 cursor-pointer">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="object-contain w-full h-full p-6 group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-3 right-3 bg-card text-card-foreground border">{product.category}</Badge>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-base line-clamp-2 leading-snug min-h-[2.5rem]">{product.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating.rate}</span>
              <span className="text-sm text-muted-foreground">({product.rating.count})</span>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold">${product.price}</span>
        <Button size="sm" className="gap-2" onClick={(e) => e.preventDefault()}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
