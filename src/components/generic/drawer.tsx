import {
    DrawerContent,
    DrawerTrigger,
    Drawer as OGDrawer
} from "@/components/ui/drawer";

interface DrawerProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    triggerCss?: string;
}

const Drawer: React.FC<DrawerProps> = ({ trigger, content, triggerCss }) => {

    return (
        <OGDrawer>
            <DrawerTrigger className={triggerCss}>{trigger}</DrawerTrigger>
            <DrawerContent>
                {content}
            </DrawerContent>
        </OGDrawer>


    );
};

export default Drawer;






