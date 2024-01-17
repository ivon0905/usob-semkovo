import MealTypes from "../models/MealTypes";
import MenuCategory from "../models/MenuCategory";
import DailyMenu from "../models/DailyMenu";
import MenuItem from "../models/MenuItem";
import SkiSlope from "../models/ski/SkiSlope";
import SkiCardsPrice from "../models/ski/SkiCardsPrice";
import http from "./http-common";
import SkiEqipmentPrice from "../models/ski/SkiEquipmentPrice";

const getMenuItems = () => {
    return http.get<Array<MenuItem>>("/Menu");
};

const getMenuCategories = () => {
    return http.get<Array<MenuCategory>>("/MenuCategory");
};

const getMealTypes = () => {
    return http.get<Array<MealTypes>>("/MealTypes");
}

const getDailyMenu = (dayOfWeek: number) => {
    return http.get<Array<DailyMenu>>("/DailyMenu/" + dayOfWeek);
}

const getSkiSlopes = () => {
    return http.get<Array<SkiSlope>>("/SkiSlopes");
}

const getSkiCardsPrices = () => {
    return http.get<Array<SkiCardsPrice>>("/SkiCardsPrices");
}

const getRoomPrice = (typeOfRoom: number, startDate: string, endDate: string) => {
    return http.get<number>("/RoomPrices/" + typeOfRoom + "/" + startDate + "/" + endDate);
}

const getEmptyRoomId = (typeOfRoom: number, startDate: string, endDate: string) => {
    return http.get<number>("/Reservations/" + typeOfRoom + "/" + startDate + "/" + endDate);
}

const createReservation = (email: string, name: string, phoneNumber: string, 
    startDate: string, endDate: string, price: number, roomId: number) => {
        return http.get("/Reservations/" + email + "/" +  name + "/" + phoneNumber + "/" + 
                         startDate + "/" + endDate + "/" + price + "/" + roomId);
    }

const getSkiEquipmentPrices = () => {
    return http.get<Array<SkiEqipmentPrice>>("/SkiEquipment");
}

const getClientId = (email: string, password: string) => {
    return http.get<number>("/Clients/" + email + "/" + password);
}

const services = {
    getMenuItems,
    getMenuCategories,
    getMealTypes,
    getDailyMenu,
    getSkiSlopes,
    getSkiCardsPrices,
    getRoomPrice,
    getEmptyRoomId,
    createReservation,
    getSkiEquipmentPrices,
    getClientId
};

export default services;