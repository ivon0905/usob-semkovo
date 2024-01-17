import { FC, useEffect, useState } from "react";
import MealTypes from "../../models/MealTypes";
import services from '../../calls/services';
import DailyMenuModel from "../../models/DailyMenu";
import MealsSection from "./MealsSection";

const DailyMenu: FC = () => {
    const [mealTypes, setMealTypes] = useState<MealTypes[]>([]);
    const [dailyMeny, setDailyMeny] = useState<DailyMenuModel[]>([]);
    const clientId = 1;

    useEffect(() => {
        retrieveMealTypes();
        retrieveDailyMenu();
    }, []);

    const retrieveMealTypes = () => {
        services.getMealTypes()
        .then((response: any) => {
            setMealTypes(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    }

    const retrieveDailyMenu = () => {
        services.getDailyMenu(1)
        .then((response: any) => {
            console.log(response.data);
            setDailyMeny(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    }

    const handleOnOrderFood = () => {
        // post();
        // put();
    }

    // const put = () => {
    //     services.testPut("iva")
    //     .then((response: any) => {
            
    //     })
    //     .catch((e: Error) => {
    //         console.log(e);
    //     })
    // }

    // const post = () => {
    //     services.testPost("iva")
    //     .then((response: any) => {
            
    //     })
    //     .catch((e: Error) => {
    //         console.log(e);
    //     })
    // }

    return (
    <main>
        <section className="menu section">
            <div className="title">
                <h2>Дневно меню 07.01.2023</h2>
                <div className="underline" />
            </div>
            <MealsSection mealTypes={mealTypes} dailyMenus={dailyMeny}/>
            <div className="container-centered">
                <button className="btn-orderFood" onClick={handleOnOrderFood}>Заяви храна</button>
            </div>
        </section>
    </main>
)};

export default DailyMenu;