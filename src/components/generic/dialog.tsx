import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { ReactNode } from "react"
  
  interface ReusableAlertDialogProps {
    open?: boolean;
    triggerText?: string;
    title?: string;
    description?: string;
    onCancel?: () => void;
    onAction?: () => void;
    actionText?: string;
    cancelText?: string;
  }
  
  export function Dialog({
    open = false,
    triggerText = "Show Dialog",
    title = "Are you absolutely sure?",
    description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    onCancel,
    onAction,
    actionText = "Continue",
    cancelText = "Cancel",
  }: ReusableAlertDialogProps) {
    return (
      <AlertDialog open={open}>
        {/* <AlertDialogTrigger asChild>
          <Button variant="outline">{triggerText}</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
            <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export function AlertDialogDemo() {
    const handleCancel = () => {
      console.log("Cancel clicked")
    }
  
    const handleAction = () => {
      console.log("Action clicked")
    }
  
    return (
      <Dialog
        onCancel={handleCancel}
        onAction={handleAction}
      />
    )
  }