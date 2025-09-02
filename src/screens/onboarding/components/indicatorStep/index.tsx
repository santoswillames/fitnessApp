import { Grid, GridItem } from "components/ui/grid";
import { useRoute } from "@react-navigation/native";

export function IndicatorStep() {
  const route = useRoute();

  return (
    <Grid className="gap-2 w-[174px]" _extra={{ className: "grid-cols-9" }}>
      <GridItem
        className={`w-[52px] h-[5px] rounded-md ${
          route.name === "OnboardingStep1" ? "bg-[#262135]" : "bg-[#D1D1D1]"
        }`}
        _extra={{ className: "col-span-3" }}
      />
      <GridItem
        className={`w-[52px] h-[5px] rounded-md ${
          route.name === "OnboardingStep2" ? "bg-[#262135]" : "bg-[#D1D1D1]"
        }`}
        _extra={{ className: "col-span-3" }}
      />
      <GridItem
        className={`w-[52px] h-[5px] rounded-md ${
          route.name === "OnboardingStep3" ? "bg-[#262135]" : "bg-[#D1D1D1]"
        }`}
        _extra={{ className: "col-span-3" }}
      />
    </Grid>
  );
}
