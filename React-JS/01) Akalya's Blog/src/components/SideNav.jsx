import Categories from "./Categories"
import Search from "./Search"
import Topposts from "./Topposts"

const SideNav = ()=>{
    return (
        <div class="flex my-5 md:my-0 flex-col gap-y-5 max-w-full md:max-w-[240px] lg:max-w-xs ">
        <Search/>
        <Categories/>
        <Topposts/>
        </div>
    )
}
export default SideNav