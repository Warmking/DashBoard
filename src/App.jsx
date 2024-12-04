import { useState } from "react";
import "./App.css";
import { ORDER_SUMMARY, TRANSACTION_DATA, USER_PROFILE } from "./constant";
import NavMenuItem from "./components/NavMenuItem";
import { Title } from "./constant";
import OrderSummary from "./components/OrderSummary";
import Container from "./components/Container";
import OrderBox from "./components/OrderBox";
import TableTransactions from "./components/TableTransactions";
import GraphSummary from "./constant/GraphSummary";
import ProgressTable from "./components/ProgressTable";
import CreditCardSection from "./components/CreditCardSection";
function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="app__container flex">
        <nav className="w-min-[100px] h-fit fixed border-black border inline-block">
          <div className="nav__logo">
            <svg
              width="64"
              height="64"
              viewBox="0 -20 60 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.221 3.62318L17.6825 24.0807C20.5641 28.2396 25.4305 29.6066 25.4305 29.6066L31.2973 19.2021L37.9166 29.5452C42.1237 26.8762 44.1156 21.3838 44.1156 21.3838L33.5213 3.62318L31.3659 0L29.2227 3.62318H29.221Z"
                fill="#EA232B"
              />
              <path
                d="M43.5163 38.6104L46.9112 44.008H57.9416L49.2847 29.6548C49.3286 29.7794 48.5305 35.774 43.5163 38.6104Z"
                fill="#5B5A5F"
              />
              <path
                d="M43.5163 38.6107L44.6152 40.359C44.6152 40.359 46.4735 39.3547 48.3019 37.2678C50.1286 35.1809 50.6964 32.0451 50.6964 32.0451L49.2847 29.6569C49.3286 29.7815 48.5305 35.7761 43.5163 38.6125V38.6107Z"
                fill="#231F20"
              />
              <path
                d="M12.809 32.9135L6.16864 44.0081H17.1972L19.9909 39.2001C19.9909 39.2001 16.174 37.6154 12.809 32.9135Z"
                fill="#5B5A5F"
              />
              <path
                d="M12.8087 32.9135L11.6273 34.8869C11.6273 34.8869 12.923 36.8566 14.7848 38.4506C16.6467 40.0464 18.9937 40.9113 18.9937 40.9113L19.9906 39.2001C19.9906 39.2001 16.1737 37.6154 12.8087 32.9135Z"
                fill="#231F20"
              />
              <path
                d="M25.622 31.554L21.7542 38.3093L22.7757 39.0998C22.7757 39.0998 23.5826 37.6063 25.2317 38.5828C25.2317 38.5828 25.9578 39.0942 25.8928 40.0596C25.8928 40.0596 26.5785 39.9312 27.3063 40.5264C27.3063 40.5264 27.8724 41.0025 27.941 41.7502C27.941 41.7502 28.6055 41.674 29.2613 42.245C29.2613 42.245 29.7835 42.6058 29.8643 43.3089C29.8643 43.3089 30.9614 42.9834 31.9952 44.1924L33.4386 45.4218C33.4386 45.4218 34.3422 46.2681 35.0648 45.5985L35.8401 44.6666L33.6601 42.6393C33.6601 42.6393 33.6478 42.1594 34.126 42.0981L36.3834 44.0956C36.3834 44.0956 37.3644 43.798 37.7723 42.5407L35.5518 40.6082C35.5518 40.6082 35.6081 40.1061 36.0705 39.9926L38.2118 41.8935C38.2118 41.8935 39.2597 41.8172 39.7379 40.2418L32.9059 33.5256C32.9059 33.5256 31.8528 35.3204 29.998 35.6199C29.998 35.6199 28.0834 35.8133 27.1674 34.7103L29.7589 31.3197C29.7589 31.3197 28.9079 30.9998 28.0131 31.5038C28.0131 31.5038 27.3872 31.8553 26.8176 32.3817L25.6203 31.5596L25.622 31.554Z"
                fill="#F3941E"
              />
              <path
                d="M23.0064 39.829L23.9804 38.8692C23.9804 38.8692 25.1495 38.7279 25.4185 40.0968L24.4445 41.25C24.4445 41.25 22.9519 41.436 23.0081 39.8271L23.0064 39.829Z"
                fill="#F3941E"
              />
              <path
                d="M24.9394 41.726L25.8624 40.7216C25.8624 40.7216 27.0948 40.5617 27.3656 42.0831L26.3775 43.1489C26.3775 43.1489 24.8849 43.3348 24.9412 41.726H24.9394Z"
                fill="#F3941E"
              />
              <path
                d="M26.9365 43.4185L27.8595 42.4141C27.8595 42.4141 29.0919 42.2541 29.3627 43.7756L28.3746 44.8413C28.3746 44.8413 26.882 45.0273 26.9382 43.4185H26.9365Z"
                fill="#F3941E"
              />
              <path
                d="M29.3008 44.8357L30.2238 43.8313C30.2238 43.8313 31.4984 43.7458 31.676 45.204L30.7372 46.2586C30.7372 46.2586 29.2445 46.4446 29.3008 44.8357Z"
                fill="#F3941E"
              />
              <path
                d="M32.8238 32.6009C32.8238 32.6009 30.7633 35.9897 28.1701 34.4962L30.7862 31.1185C30.7862 31.1185 32.0731 29.4445 34.2795 30.8135C34.2795 30.8135 35.7528 31.6914 36.9976 32.612L38.1913 31.6969L42.2121 37.5334L40.025 39.624L32.8273 32.6009H32.8238Z"
                fill="#F3941E"
              />
              <path
                d="M42.8 36.849C42.8 36.849 47.3746 33.2928 47.9037 28.7099C47.9037 28.7099 48.5367 24.2274 45.9241 21.3297C45.9241 21.3297 43.89 27.9585 38.9778 31.2153L42.8017 36.849H42.8Z"
                fill="#F3941E"
              />
              <path
                d="M24.6977 31.3828L21.0232 37.5374C21.0232 37.5374 14.7591 34.4871 13.0889 29.3331C13.0889 29.3331 11.7949 24.2927 15.116 20.3347C15.116 20.3347 14.0629 27.6945 24.6994 31.3847L24.6977 31.3828Z"
                fill="#F3941E"
              />
            </svg>
            <h1 className="company__name">Kaveri Hospital</h1>
          </div>
          <div className="nav__menu">
            {Title &&
              Title.items.map((item, index) => (
                <NavMenuItem
                  key={index}
                  active={activeIndex === index}
                  className={item.icon}
                  title={item.title}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                />
              ))}
          </div>
        </nav>
        <div className="main__container ml-[250px]">
          <header>
            <div className="search__box">
              <i className="uil uil-search search__icon"></i>
              <input
                type="text"
                name="search"
                className="search__bar"
                placeholder="Search here..."
              />
            </div>
            <div className="header__profile__box">
              <div className="icon__box">
                <i className="bx bx-bell header__icon"></i>
              </div>
              <img
                className="header__profile"
                src={USER_PROFILE}
                alt="Profile"
              />
              <div className="profile__title">
                <span className="profile__user">Mohan</span>
                <i className="uil uil-angle-down profile__dropdown"></i>

                <p className="profile__role">Mannger</p>
              </div>
            </div>
          </header>
          <main className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="basis-[60%]">
                <Container title="Total Order Summary" showExtraInfo="true">
                  <div className="flex">
                    {ORDER_SUMMARY &&
                      ORDER_SUMMARY.data.map((item, _) => (
                        <OrderBox
                          key={_}
                          quantity={item.quantity}
                          status={item.status}
                          iconClass={item.iconClass}
                          percentage={item.percentage}
                          bgColor={item.bgColor}
                          iconColor={item.iconColor}
                        />
                      ))}
                  </div>
                </Container>
                <Container title="Analytics">
                  <GraphSummary />
                </Container>
              </div>
              <div className="basis-[40%]">
                <TableTransactions tableData={TRANSACTION_DATA} />
              </div>
            </div>
            <div className="grid grid-cols-[minmax(550px,_1fr)_500px]">
              <div className="">
                <Container title="Top Products">
                  <ProgressTable />
                </Container>
              </div>
              <div className="">
                <CreditCardSection/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
