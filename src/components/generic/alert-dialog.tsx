import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialog as OGAlertDialog,
} from "@/components/ui/alert-dialog";

interface AlertDialogProps {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel?: () => void;
    trigger: React.ReactNode;
    actionText?: string;
    cancelText?: string;
}

export function AlertDialog({
    title,
    description,
    onConfirm,
    trigger,
    onCancel,
    actionText,
    cancelText,
}: AlertDialogProps) {
    return (
        <OGAlertDialog>
            <AlertDialogTrigger asChild>
                {trigger}
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-500/20" onClick={onCancel || (() => { })}>{cancelText || 'Huỷ'}</AlertDialogCancel>
                    <AlertDialogAction className="border-black  ring-black" onClick={onConfirm}>{actionText || 'Đồng ý'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </OGAlertDialog>
    );
}