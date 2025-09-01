import { Button, ButtonIcon } from "components/ui/button";
import { useOnboardingNavigation } from "hooks/useTypedNavigation";
import { ChevronLeft } from "lucide-react-native";

export function GobackButton() {
    const navigation = useOnboardingNavigation();
    
    return (
        <Button
            variant="outline"
            className="rounded-2xl p-3.5 w-[78px] h-[78px] border-[#D9D9D9]"
            onPress={() => navigation.goBack()}
        >
            <ButtonIcon as={ChevronLeft} color="#524A4A" size={39}/>
        </Button>
    )
}