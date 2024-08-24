import React, { useEffect } from "react";
import { motion } from "framer-motion";

function ImportantDates() {
  const dates = [
    {
      month: "January",
      people: [],
    },
    {
      month: "February",
      people: [
        {
          name: "Sasmita BA",
          date: "03/02/1983",
        },
        {
          name: "Manini BA",
          date: "07/02/1993",
        },
        {
          name: "Pyari & Jyoti  MA",
          date: "18/02/2019",
        },
        {
          name: "Ashok & Sobhagyalaxmi MA",
          date: "16/02/2020",
        },
        { name: "Riyanshi BA", date: "22/02/2022" },
      ],
    },
    {
      month: "March",
      people: [
        { name: "Pramod BA", date: "24/03/1947" },
        { name: "Rohit BA", date: "21/03/1964" },
        { name: "Pramod & JemaDai MA", date: "10/03/1967" },
        { name: "Kamakhya BA", date: "20/03/1978" },
        { name: "Srikant & Suniti MA", date: "03/03/1994" },
        { name: "Rakesh BA", date: "12/03/1995" },
        { name: "Sobhagyalaxmi BA", date: "15/03/1997" },
        { name: "Jitendra & Sasmita MA", date: "05/03/2003" },
        { name: "Sanjib & Manini MA", date: "13/03/2019" },
      ],
    },
    { month: "April", people: [] },
    {
      month: "May",
      people: [
        { name: "Suniti BA", date: "15/05/1972" },
        { name: "Rohit & Kabita MA", date: "22/05/1994" },
        { name: "Shreyansh BA", date: "20/05/2020" },
      ],
    },
    {
      month: "June",
      people: [
        { name: "Jyoti BA", date: "20/06/1999" },
        { name: "Barsha BA", date: "20/06/2009" },
        { name: "Manoj & Somyashreedatta MA", date: "06/06/2012" },
      ],
    },
    {
      month: "July",
      people: [
        { name: "Jitendra BA", date: "27/07/1972" },
        { name: "Sanjib BA", date: "26/07/1982" },
        { name: "Lalita BA", date: "04/07/1988" },
        { name: "Manoranjan BA", date: "03/07/1993" },
        { name: "Manoranjan & Prativa MA", date: "10/07/2024" },
      ],
    },
    { month: "August", people: [{ name: "Manas BA", date: "31/08/2000" }] },
    {
      month: "September",
      people: [
        { name: "Krushna Prasad BA", date: "19/09/2006" },
        { name: "Srikant BA", date: "07/09/1965" },
      ],
    },
    {
      month: "October",
      people: [
        { name: "Durga Madhav BA", date: "24/10/2004" },
        { name: "Sai Simran BA", date: "25/10/2016" },
      ],
    },
    {
      month: "November",
      people: [
        { name: "JemaDai BA", date: "01/11/1950" },
        { name: "Ashok BA", date: "14/11/1987" },
        { name: "Manoj BA", date: "06/11/1988" },
        { name: "Prativa BA", date: "15/11/2001" },
      ],
    },
    {
      month: "December",
      people: [
        { name: "Somyashreedatta BA", date: "19/12/1989" },
        { name: "Jagadish BA", date: "31/12/2003" },
        { name: "Kamakhya & Lalita MA", date: "05/12/2005" },
      ],
    },
  ];

  return (
    <section className="border-b border-neutral-900 pb-6 px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Dates To Remember</h2>
      <div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-12"
      >
        {dates.map((monthData, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="month-card bg-gray-200 p-4 rounded-sm text-center"
          >
            <h3 className="text-xl font-bold text-black mb-4">
              {monthData.month}
            </h3>
            <ul className="text-black">
              {monthData.people.map((person, personIndex) => (
                <li key={personIndex} className="mb-2">
                  {person.name} - {person.date}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ImportantDates;
