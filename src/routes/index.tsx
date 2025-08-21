import { NavigationContainer } from "@react-navigation/native";
import { BottomTabRoutes } from "./BottomRoutes";

export function Routes(){
    return (
        <NavigationContainer>
            <BottomTabRoutes />
        </NavigationContainer>
    )
}