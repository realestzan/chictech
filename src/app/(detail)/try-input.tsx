"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const formSchema = z.object({
    size: z.string(),
    material: z.string(),
    height: z.number(),
    weight: z.number(),
    isCustomFit: z.boolean().default(false),
});

export default function TryInput() {
    const sizes = [
        { label: "Small", value: "S" },
        { label: "Medium", value: "M" },
        { label: "Large", value: "L" },
        { label: "Extra Large", value: "XL" },
    ] as const;

    const materials = [
        { label: "Cotton", value: "cotton" },
        { label: "Polyester", value: "polyester" },
        { label: "Wool", value: "wool" },
        { label: "Silk", value: "silk" },
    ] as const;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <main className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
                    <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Clothing Size</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-[200px] justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? sizes.find(
                                                        (size) => size.value === field.value
                                                    )?.label
                                                    : "Select size"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search size..." />
                                            <CommandList>
                                                <CommandEmpty>No size found.</CommandEmpty>
                                                <CommandGroup>
                                                    {sizes.map((size) => (
                                                        <CommandItem
                                                            value={size.label}
                                                            key={size.value}
                                                            onSelect={() => {
                                                                form.setValue("size", size.value);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    size.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {size.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>Select your clothing size.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="material"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Material</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-[200px] justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? materials.find(
                                                        (material) => material.value === field.value
                                                    )?.label
                                                    : "Select material"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search material..." />
                                            <CommandList>
                                                <CommandEmpty>No material found.</CommandEmpty>
                                                <CommandGroup>
                                                    {materials.map((material) => (
                                                        <CommandItem
                                                            value={material.label}
                                                            key={material.value}
                                                            onSelect={() => {
                                                                form.setValue("material", material.value);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    material.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {material.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>Select the material of the clothing.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="height"
                        render={({ field: { value, onChange } }) => (
                            <FormItem>
                                <FormLabel>Height - {value} cm</FormLabel>
                                <FormControl>
                                    <Slider
                                        min={100}
                                        max={250}
                                        step={1}
                                        defaultValue={[170]}
                                        onValueChange={(vals) => {
                                            onChange(vals[0]);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>Adjust your height by sliding.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="weight"
                        render={({ field: { value, onChange } }) => (
                            <FormItem>
                                <FormLabel>Weight - {value} kg</FormLabel>
                                <FormControl>
                                    <Slider
                                        min={30}
                                        max={200}
                                        step={1}
                                        defaultValue={[70]}
                                        onValueChange={(vals) => {
                                            onChange(vals[0]);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>Adjust your weight by sliding.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isCustomFit"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Custom Fit</FormLabel>
                                    <FormDescription>Check if you want a custom fit.</FormDescription>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    )
}
