"use client";

import type React from "react";import {
  Card,
 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function home() {
  const FAQ_ITEMS = [
    {
      question: "What is ZifyPay's $0 POS Terminal?",
      answer:
        "Our $0 POS Terminal is a mobile solution that transforms your smartphone or tablet into a complete point-of-sale system, eliminating the need for expensive dedicated hardware.",
    },
    {
      question: "How does ZifyPay offer zero credit card processing fees?",
      answer:
        "We use a transparent pricing model where the business can choose to either absorb the fee or pass it on to customers through a small service charge.",
    },
    {
      question: "Are there any hidden fees or contracts?",
      answer:
        "No, ZifyPay is committed to complete transparency. There are no hidden fees, long-term contracts, or cancellation penalties.",
    },
    {
      question: "Who is eligible for the $0 POS Terminal?",
      answer:
        "Any business owner or merchant can sign up for our $0 POS Terminal program. It's designed for businesses of all sizes.",
    },
    {
      question: "What payment methods does the ZifyPay POS Terminal support?",
      answer:
        "Our terminal supports credit/debit cards, contactless payments (NFC), mobile wallets like Apple Pay and Google Pay, and QR code payments.",
    },
    {
      question: "How do I get started with ZifyPay's $0 POS Terminal?",
      answer:
        "Simply download our app, create an account, complete the verification process, and you can start accepting payments immediately.",
    },
    {
      question: "How long does it take to receive and set up the POS terminal?",
      answer:
        "Since it's a BYOD solution, setup can be completed within minutes by downloading our app. If you need a card reader, shipping typically takes 3-5 business days.",
    },
    {
      question: "Is there customer support available if I need help?",
      answer:
        "Yes, we offer 24/7 customer support via phone, email, and live chat to help with any questions or technical issues.",
    },
    {
      question:
        "Can I accept payments from all customers, including contactless payments?",
      answer:
        "Yes, our solution supports all major payment methods including contactless payments, making it convenient for all your customers.",
    },
    {
      question: "Why should I choose ZifyPay over other POS providers?",
      answer:
        "ZifyPay offers a zero-cost hardware solution, competitive processing rates, no contracts, simple setup, and excellent customer support - making it the most cost-effective and flexible solution on the market.",
    },
  ]; 
  const [openedItem, setOpenedItem] = useState(null);

  const toggleFAQ = (index : any) => {
    setOpenedItem(openedItem === index ? null : index);
  }; 
 const posDevices = [
   {
     name: "Station Duo",
     price: "$0",
     image: "/pic1.png",
     features: [
       { name: "Touch Screen Display", icon: "screen" },
       { name: "Built-in Printer / Card Reader", icon: "printer" },
       { name: "Receipt Printer", icon: "receipt" },
       { name: "Cash Drawer", icon: "drawer" },
     ],
   },
   {
     name: "Mini POS",
     price: "$0",
     image: "/pic2.png",
     features: [
       { name: "Portable Design", icon: "portable" },
       { name: "Wireless / WiFi", icon: "wifi" },
       { name: "Credit Card Reader", icon: "card" },
       { name: "Digital Receipt", icon: "digital" },
     ],
   },
   {
     name: "Flex POS",
     price: "$0",
     image: "/pic3.png",
     features: [
       { name: "Hi-Res Digital Display", icon: "display" },
       { name: "Card Reader", icon: "card" },
       { name: "Accept Card Payments", icon: "payment" },
       { name: "Take POS Anywhere", icon: "mobile" },
     ],
   },
   {
     name: "Station POS",
     price: "$0",
     image: "/pic4.png",
     features: [
       { name: "Built-in Scanner", icon: "scanner" },
       { name: "Receipt Printer", icon: "printer" },
       { name: "Retail Ready Hardware", icon: "retail" },
       { name: "Payment Card", icon: "payment" },
     ],
   },
 ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    location: "",
    businessType: "",
    acceptsCards: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {" "}
      <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 mt-36">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-[#CF78C6] text-3xl md:text-7xl">
                Lifetime free
              </span>{" "}
              <span className="text-white text-3xl md:text-7xl">Access $0</span>
            </h1>
            <h2 className="text-3xl font-bold">
              <span className="text-white text-3xl md:text-7xl">
                {" "}
                Processing
              </span>{" "}
              <span className="text-[#CF78C6] text-3xl md:text-7xl">
                Fees POS
              </span>{" "}
              <span className="text-white text-3xl md:text-7xl">
                {" "}
                <br /> Terminal
              </span>
            </h2>
            <p className="text-white max-w-7xl text-2xl md:text-4xl mt-12">
              Video (POS machine ke zero $ ke sath testimonial chale ge client
              ke koi bhi probel he form fill up karo)
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-[41px] mt-32 mb-12">
            {/* Registration Form */}
            <div
              className=" rounded-lg p-6 w-full md:w-5/12"
              style={{ backgroundImage: "url('/form.jpg')" }}
            >
              <h3 className="text-lg font-bold mb-4">Register Your Business</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs">
                      What type of business do you operate?
                    </Label>
                    <RadioGroup
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="retail" id="retail" />
                        <Label htmlFor="retail" className="text-xs">
                          Retail
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="restaurant" id="restaurant" />
                        <Label htmlFor="restaurant" className="text-xs">
                          Restaurant
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="service" id="service" />
                        <Label htmlFor="service" className="text-xs">
                          Service
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="text-xs">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-xs">
                      Do you accept credit/ debit card payments?
                    </Label>
                    <RadioGroup
                      value={formData.acceptsCards}
                      onValueChange={(value) =>
                        setFormData({ ...formData, acceptsCards: value })
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-xs">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-xs">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="text-xs">
                  <p>Specific Requirements</p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Placeholder for video/image */}
            <div className="bg-gray-100 rounded-lg w-full md:w-7/12 flex items-center justify-center mb-36 ">
              <div className="text-gray-400">Video Placeholder</div>
            </div>
          </div>
        </div>
      </div>
      {/* section -2 */}
      <div className="flex items-center justify-center min-h-screen bg-white relative p-8 overflow-hidden ">
        {/* Larger blue circle in center */}
        <div className="absolute w-[400px] h-[400px] bg-blue-600 rounded-full z-0 transform scale-150"></div>

        {/* Cards container with improved width and responsiveness */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-10 relative w-full max-w-6xl mx-12  ">
          {/* Left card (black) - increased width */}
          <div className="bg-black text-white rounded-lg shadow-lg p-8 w-full border-2 border-blue-600">
            <h2 className="text-3xl font-bold mb-8 text-center">
              ZifyPay 0% Processing
            </h2>

            <div className="space-y-6">
              <div className="flex justify-between text-xl">
                <span className="font-bold">0%</span>
                <span>-</span>
                <span>Interchange Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0.00</span>
                <span>-</span>
                <span>Transaction Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0.00</span>
                <span>-</span>
                <span>Authorization Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0/mo</span>
                <span>-</span>
                <span>Statement Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0/mo</span>
                <span>-</span>
                <span>Monthly Minimum</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0/mo</span>
                <span>-</span>
                <span>Online Access Fee</span>
              </div>
            </div>

            <div className="mt-8 text-center font-semibold text-2xl">
              No Junk Fees
            </div>
          </div>

          {/* Right card (white) - increased width */}
          <div className="bg-white text-blue-900 rounded-lg shadow-lg p-8 w-full border-2 border-blue-600">
            <h2 className="text-3xl font-bold mb-8 text-center  ">
              Traditional Processing
            </h2>

            <div className="space-y-6">
              <div className="flex justify-between text-xl">
                <span className="font-bold">2%-4%</span>
                <span>-</span>
                <span>of Gross Interchange Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0.05-$0.25</span>
                <span>-</span>
                <span>Transaction Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$0.05-$0.25</span>
                <span>-</span>
                <span>Authorization Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$5-$10/mo</span>
                <span>-</span>
                <span>Statement Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$25-$50/mo</span>
                <span>-</span>
                <span>Monthly Minimum</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$3-$15/mo</span>
                <span>-</span>
                <span>Online Access Fee</span>
              </div>

              <div className="flex justify-between text-xl">
                <span className="font-bold">$1-$199/mo</span>
                <span>-</span>
                <span>Junk Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section -3 */}
      <div className="bg-blue-600 min-h-screen p-4">
        <div className="max-w-5xl mx-auto mt-24">
          {/* Card Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {posDevices.map((device, index) => (
              <Card
                key={index}
                className="bg-white rounded-lg overflow-hidden border-0 shadow-xl"
              >
                {/* Price Badge & Image Section */}
                <div className="relative bg-white h-40 flex items-center px-4 border-2 border-gray-50 shadow-2xl shadow-gray-100 p-4">
                  <Badge className="absolute  h-full left-3 bg-blue-600 text-white text-5xl font-bold px-4 py-2 rounded-md">
                    {device.price}
                  </Badge>
                  <div className="flex-1"></div> {/* Push image to the right */}
                  <img
                    src={device.image}
                    alt={device.name}
                    className="h-32 w-32 md:h-40 md:w-40 object-contain"
                  />
                </div>

                {/* Device Name */}
                <div className="text-center pt-4 pb-2">
                  <h3 className="text-lg font-bold">{device.name}</h3>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-0 px-4 pb-4">
                  {device.features.map((feature, i) => (
                    <div
                      key={i}
                      className="border-t border-r last:border-r-0 even:border-r-0 border-gray-200 p-3"
                    >
                      <div className="flex justify-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-400"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                        </svg>
                      </div>
                      <p className="text-sm text-center text-gray-700">
                        {feature.name}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-blue-600 min-h-screen p-4 text-white ">
        <div className="max-w-6xl mx-4 md:mx-48  mt-24">
          {/* Header Section */}
          <div className="pt-6 pb-4">
            <div className="flex flex-col md:flex-row gap-8  mt-8">
              <div className="md:w-2/3">
                <p className="uppercase text-2xl font-semibold tracking-wider">
                  START WITH ZERO COST
                </p>
                <h1 className="text-4xl font-bold mt-2 mb-2">
                  Bring your own Device
                  <br />
                  Program (BYOD)
                </h1>
                <p className="text-xl mb-6 mt-8">
                  A BYOD (Bring Your Own Device) POS refers to a point-of-sale
                  system where a business owner can use their personal
                  smartphone or tablet (their device) as the primary terminal to
                  accept customer payments, by utilizing a downloadable
                  application along with optional hardware accessories,
                  effectively turning their device into a portable POS system.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>No dedicated hardware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Mobile app functionality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Bluetooth card reader</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Cost-effective</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-[26rem] w-52">
                  <div className="rounded-lg shadow-lg">
                    <img src="/FAq.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white text-black rounded-xl p-6  md:mx-6 mt-24">
            <h2 className="text-blue-600 text-2xl font-bold text-center mb-6">
              FAQ
            </h2>

            <div className="space-y-2">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <span className="text-gray-500 text-xl">
                      {openedItem === index ? "−" : "+"}
                    </span>
                  </button>

                  {openedItem === index && (
                    <div className="p-4 pt-0 border-t border-gray-200">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
