/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from "@/components/ui/button"
import { Carousel } from '@/components/ui/carousel'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  color: z.enum(['Gray', 'Black', 'Green']),
  quantity: z.number().min(1).max(10)
})

export default function ProductDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['/placeholder.avif', '/placeholder.avif', '/placeholder.avif']

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: 'Gray',
      quantity: 1
    }
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <div className="md:w-1/2">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Product image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Hannover Slim Brief</h1>
          <p className="text-xl mb-4">$2,750</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="color">Color</Label>
              <RadioGroup defaultValue="Gray" className="flex space-x-2">
                {['Gray', 'Black', 'Green'].map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={color} {...register('color')} />
                    <Label htmlFor={color}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                type="number"
                id="quantity"
                {...register('quantity', { valueAsNumber: true })}
                className="w-20"
              />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </form>
        </div>
      </motion.div>
      <Tabs defaultValue="description" className="mt-8">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <p>A sleek and professional briefcase designed for the modern office. Perfect for carrying your laptop and essential documents.</p>
        </TabsContent>
        <TabsContent value="details" className="mt-4">
          <table className="w-full">
            <tbody>
              {[
                { label: 'Dimensions', value: '16" x 12" x 4"' },
                { label: 'Weight', value: '2.5 lbs' },
                { label: 'Material', value: 'Premium leather' },
                { label: 'Laptop Compartment', value: 'Fits up to 15" laptop' },
              ].map((detail) => (
                <tr key={detail.label} className="border-b">
                  <td className="py-2 font-medium">{detail.label}</td>
                  <td className="py-2">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
      <Carousel className="mt-8">
        {['/placeholder.avif', '/placeholder.avif', '/placeholder.avif'].map((src, index) => (
          <img key={index} src={src} alt={`Product in use ${index + 1}`} className="w-full h-64 object-cover" />
        ))}
      </Carousel>
    </div>
  )
}