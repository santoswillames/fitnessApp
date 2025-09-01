import { Grid, GridItem } from "components/ui/grid";

export function IndicatorStep() {
    return (

        <Grid className="gap-2 w-[174px]" _extra={{ className: 'grid-cols-9' }}>
            <GridItem className="bg-[#D1D1D1] w-[52px] h-[5px] rounded-md" _extra={{ className: 'col-span-3' }}/>
            <GridItem className="bg-[#D1D1D1] w-[52px] h-[5px] rounded-md" _extra={{ className: 'col-span-3' }}/>
            <GridItem className="bg-[#D1D1D1] w-[52px] h-[5px] rounded-md" _extra={{ className: 'col-span-3' }}/>
        </Grid>
    )
}