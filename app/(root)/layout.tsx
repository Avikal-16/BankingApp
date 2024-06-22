import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    const loggedIn={firstName:'Avikal', lastName:'JSM'}

    return (
      <main className="flex h-scree w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            <div>
              <MobileNavbar user={loggedIn}/>
            </div>
          </div>
        {children}
        </div>
      </main>
    );
  }
export default RootLayout;