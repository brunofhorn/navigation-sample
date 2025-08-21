import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { createDrawerNavigator, DrawerScreenProps} from "@react-navigation/drawer";

export type DrawerRoutesList = {
    home: undefined 
    product: undefined | { id: string}
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export function DrawerRoutes(){
    return (
        <Drawer.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="product" component={Product} />
        </Drawer.Navigator>
    )
}