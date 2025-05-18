import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { CirclePlus } from "lucide-react";
import {TodoList} from "@/components/TodoList";
import { AccordionDemo } from "@/components/AppAccordian";

export default function Home() {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      {/* Bar Chart (wider) */}
      <div className="bg-primary-foreground rounded-lg col-span-1 lg:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>

      {/* Area Chart */}
      <div className="bg-primary-foreground rounded-lg col-span-1">
        <AppAreaChart />
      </div>

      {/* Popular Content */}
      <div className="bg-primary-foreground rounded-lg col-span-1">
        <CardList title="Popular Content" />
      </div>

      {/* Pie Chart */}
      <div className="bg-primary-foreground rounded-lg col-span-1">
        <AppPieChart />
        <TodoList />
        <AccordionDemo/>
      </div>

      {/* Latest Transactions */}
      <div className="bg-primary-foreground rounded-lg col-span-1">
        <CardList title="Latest Transactions" />
      </div>

      {/* Custom Buttons Demo (Optional Section) */}
      {/* <div className="bg-primary-foreground rounded-lg col-span-1 lg:col-span-2 2xl:col-span-2 p-4">
        <Button size="xl" className="rounded-full text-custom-color mb-4">
          <CirclePlus className="mr-2" />
          Add Ahmad
        </Button>
        <div className="flex gap-4">
          <CustomButton disabled={false} isRounded={true} text="Test" />
          <CustomButton disabled={true} isRounded={false} />
        </div>
      </div> */}
    </div>
  );
}
