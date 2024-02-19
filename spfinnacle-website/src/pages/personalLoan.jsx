import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBusinessTime,
  faCoins,
  faEyeSlash,
  faHandHoldingDollar,
  faPeopleGroup,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

const PersonalLoan = () => {
  return (
    <>
      <section
        id='personal-loan'
        className='px-10 py-8 sm:py-10 md:px-20 lg:py-14  '
      >
        <div className='container mx-auto rounded-xl border border-black bg-purple-800 p-10  text-white sm:p-16 '>
          <h2 className='pb-5 text-2xl sm:text-3xl'>Apply For Personal Loan</h2>
          <h3 className='pb-5 text-xl sm:text-2xl'>EMI Calculator</h3>
          <div className='flex flex-1 flex-col pb-8 xl:flex-row xl:justify-between'>
            <div className=''>
              <h2 className='pb-3 text-lg sm:text-xl'>
                You deserved loan amount
              </h2>
              <input
                className='w-full rounded py-3 pl-3 text-black outline-none focus:outline-offset-2 focus:outline-fuchsia-300 sm:pr-36   '
                type='text'
                name='loan-amount'
                id='loan_amount'
              />
            </div>
            <div className=''>
              <h2 className='pb-3 text-lg sm:text-xl'>
                Rate of interest in percentage
              </h2>
              <input
                className='w-full rounded py-3 pl-3 text-black outline-none focus:outline-offset-2 focus:outline-fuchsia-300 xl:pr-36'
                type='text'
                name=''
                id='percentage'
              />
            </div>
            <div className=''>
              <h2 className='pb-3 text-lg sm:text-xl'>
                Loan tenure (in years)
              </h2>
              <input
                className='w-full rounded py-3 pl-3 text-black outline-none focus:outline-offset-2 focus:outline-fuchsia-300 xl:pr-36'
                type='text'
                name=''
                id='years'
              />
            </div>
          </div>
          <p className=' pb-5 text-xl xl:text-center'>
            <button className='w-full rounded-lg border bg-rose-400 py-4 xl:w-3/4 '>
              Calculate your EMI
            </button>
          </p>

          <div className=' text-lg sm:text-center xl:text-xl'>
            <p className='overflow-hidden text-black sm:inline-block sm:rounded-lg sm:border sm:bg-white'>
              <span className='  sm:pl-2 '>EMI Amount:</span>
              <input
                className='my-3 mr-3 rounded  p-1 pr-28 outline-none sm:my-0 sm:p-3 sm:pr-0'
                type='text'
                name=''
                id='emi-amount'
              />
              <button
                className='rounded bg-red-400 px-2 py-1 sm:px-0 sm:py-3 xl:px-6'
                type='button'
              >
                Apply Now
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className=' px-10 py-8 md:px-20 '>
        <div className='container mx-auto '>
          <h1 className=' pb-5 text-xl font-bold  text-purple-600 lg:text-2xl xl:pb-10 xl:text-3xl'>
            Personal Loan Features
          </h1>
          <div className='grid grid-cols-1 gap-3 pb-5 sm:grid-cols-2 lg:grid-cols-3 lg:pb-10 xl:grid-cols-6 '>
            <div className=' rounded border border-black p-5'>
              <FontAwesomeIcon
                icon={faTags}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>Offers for New Customer</p>
            </div>
            <div className=' rounded border border-black p-5'>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>3 Unique Variant</p>
            </div>
            <div className=' rounded border border-black p-5'>
              <FontAwesomeIcon
                icon={faCoins}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>Loan Upto Rs.40 Lakh</p>
            </div>
            <div className='rounded border border-black p-5'>
              <FontAwesomeIcon
                icon={faBusinessTime}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>Tenure upto 84 months</p>
            </div>
            <div className='  rounded border border-black p-5 '>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>No Guarantor / Collateral</p>
            </div>
            <div className='  rounded border border-black p-5'>
              <FontAwesomeIcon
                icon={faEyeSlash}
                className='h-10 w-10 pb-4 text-red-500'
              />
              <p className='font-semibold'>No Hidden Charges</p>
            </div>
          </div>
          <div className='py-3 sm:py-5'>
            <h1 className='py-3 text-xl  font-bold text-purple-600 lg:text-2xl'>
              Features and Benefits of our Personal Loan
            </h1>
            <p className='py-3 text-neutral-800'>
              A personal loan is an unsecured loan that is not backed by
              collateral or security. This makes it a flexible financing option,
              as there are no limitations on its use.
            </p>
            <ul
              role='list'
              className='marker:text-red-500 sm:list-inside sm:list-disc '
            >
              The followings are the ways a personal loan can be useful:
              <li className=' py-3 sm:indent-10'>
                <b className='outline-double sm:outline-none'>
                  Debt consolidation :
                </b>
                <span className='ml-2 sm:ml-1'>
                  Combining multiple debts into a single loan with a lower
                  interest rate to save money on interest payments and make it
                  easier to manage debts.
                </span>
              </li>
              <li className='py-3 sm:indent-10'>
                <b className='outline-double sm:outline-none'>
                  Home renovation :
                </b>
                <span className='ml-2 sm:ml-1'>
                  Using a personal loan to fund home renovation projects can
                  increase the value of your home and improve your living
                  conditions.
                </span>
              </li>
              <li className=' py-3 sm:indent-10'>
                <b className='outline-double sm:outline-none'>
                  Medical expenses :
                </b>
                <span className='ml-2 sm:ml-1'>
                  If you have unexpected medical expenses, such as emergency
                  surgery or hospitalization, a personal loan can help cover the
                  costs.
                </span>
              </li>
              <li className='py-3 sm:indent-10'>
                <b className='outline-double sm:outline-none'>
                  Emergency expenses :
                </b>
                <span className='ml-2 sm:ml-1'>
                  A personal loan can help cover unexpected expenses like
                  medical emergencies or car repairs to avoid financial
                  hardship.
                </span>
              </li>
            </ul>
          </div>
          <div className='rounded-lg border border-black bg-purple-600 p-5 text-white sm:p-10'>
            <h1 className='text-xl lg:text-3xl'>
              Personal Loan Eligibility and Document
            </h1>
            <div className='mt-4 lg:mt-8 lg:flex lg:items-center lg:justify-between'>
              <p className='text-lg lg:text-xl'>
                Read on to know the criteria required to apply for our Personal
                Loan.
              </p>
              <button className='mt-4  rounded-lg  bg-red-500 px-5 py-2 text-lg lg:mt-0'>
                Apply
              </button>
            </div>
          </div>
          <div className='py-5 '>
            <h1 className='mb-3  text-3xl text-gray-600 md:mb-5'>
              Personal Loan Eligibility Criteria
            </h1>
            <p className='text-xl'>
              To qualify for a personal loan, you have to meet certain criteria.
              Below are the important factors that lenders take into
              consideration to decide your eligibility for a personal loan.
            </p>
            <ul className='list-inside list-decimal'>
              <li className='py-3 indent-10 text-lg'>
                Age should fall under the range of 21 years to 60 years
              </li>
              <li className='py-3 indent-10 text-lg'>
                Net monthly income should be 15,000/- for salaried and
                self-employed, yearly transactions should be a minimum of 20
                lakhs
              </li>
              <li className='py-3 indent-10 text-lg'>
                Credit score must be above 650
              </li>
              <li className='py-3 indent-10 text-lg'>Debt-to-income ratio</li>
              <li className='py-3 indent-10 text-lg'>Employment stability</li>
              <li className='py-3 indent-10 text-lg'>
                Maintained a good credit score
              </li>
              <li className='py-3 indent-10 text-lg'>
                Clear repayment history
              </li>
              <li className='py-3 indent-10 text-lg'>
                Must be a Resident Citizen of India
              </li>
            </ul>
          </div>
          <div className='py-5 '>
            <h1 className='py-3 text-xl text-gray-700 md:text-3xl'>
              Documents required to apply for Personal Loan
            </h1>
            <ul className='list-inside list-disc'>
              <li className='py-3 indent-10 md:text-lg'>
                <b>Identity Proof</b> - Passport, Voter’s ID, Driving License,
                PAN Card, Aadhaar Card.
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b> Proof of Residence or Address Proof</b> - Passport, Voter’s
                ID, Driving License, PAN Card, Aadhaar Card, Electricity Bill,
                Telephone Bill, Ration Card.
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b> Age Proof </b>- Passport, Voter’s ID, Driving License, PAN
                Card, Aadhaar Card
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b>Income Proof</b> - 1 year Bank statement, 3 months Salary
                Slips
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b> Employment Proof</b> - Employment Certificate, Office
                address proof
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                GST or VAT Registration for Self-employed
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b>Photograph</b> - Passport-size photographs
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b>Business proof</b> - Business registration documents such as
                a partnership deed, Memorandum of Association (MOA), Articles of
                Association (AOA), etc
              </li>
              <li className='py-3 indent-10 md:text-lg'>
                <b>Income tax returns</b> – Documents of the past 2-3 years to
                verify income and tax payment history
              </li>
            </ul>
          </div>
          <div className='py-5'>
            <h1 className='py-3 text-xl text-gray-700 md:text-3xl'>
              EMI Calculator for Personal Loan
            </h1>
            <p className='py-3 indent-10  md:text-lg'>
              An EMI calculator is a useful tool that can help you estimate the
              monthly installments you will have to pay towards your personal
              loan within a specific period. By using the Ruloans EMI
              calculator, you can calculate your EMI beforehand, which can help
              you plan your finances better. Additionally, you can check your
              eligibility and compare different loan options using Ruloans
              Personal Loan calculator.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalLoan;
