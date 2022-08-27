import { Box,  Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,} from "@chakra-ui/react";

const MidSection = () => {
  
  return (
    <Box style={{display:"flex" , height:"100vh", justifyContent:"center", marginLeft:"10%" , marginTop:"5rem", marginBottom:"5rem"}}>
     

        <Box style={{width:"30%" }}>
          <Accordion allowToggle>
{/* -------------------------------------------------1--------------------------------------------------- */}            
            <AccordionItem>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}} src="https://cdn-icons-gif.flaticon.com/6450/6450929.gif" />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}> Time tracking</div>
              
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Easy-touse time tracker. Know the time spent on tasks, hours of
                work, and breaks for each employee
              </AccordionPanel>
            </AccordionItem>

         
{/* ------------------------------------------------------------------2--------------------------------------- */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                        src="https://img.icons8.com/external-line-colors-royyan-wijaya/2x/external-billing-cryp-finance-line-colors-royyan-wijaya.png"
                        alt="icon"
                      />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Billing and budgeting</div>
                
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Simple and flexible projects billing. Set budgets to track
                progress in real time. Receive timely notifications
              </AccordionPanel>
            </AccordionItem>
{/* ------------------------------------------------------------3--------------------------------------- */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                      src="https://img.icons8.com/office/2x/live-folder.png" />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Task management</div>
               
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Create tasks, organize them in sections, add time estimates to
                keep everyone in the loop and on track
              </AccordionPanel>
            </AccordionItem>
{/* ------------------------------------------------------4---------------------------------------------- */}
            <AccordionItem>
              <h2>
                <AccordionButton>
             
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://img.icons8.com/fluency/2x/blockly-turquoise.png" />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Visual planning</div>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}  style={{backgroundColor:"rgb(240,250,245)"}} >
                View your teram's schedule, know how busy or available some is,
                compare plan to the actual time spent
              </AccordionPanel>
            </AccordionItem>
{/* --------------------------------------------------------------5--------------------------------------------- */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://img.icons8.com/fluency/2x/layers.png" />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Expenses</div>
              
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}style={{backgroundColor:"rgb(240,250,245)"}}>
                Track work-related expenses with ease. Reimburse employees, use
                costs in projects budgets, add to client invoices
              </AccordionPanel>
            </AccordionItem>
{/* ---------------------------------------------6----------------------------------------------------- */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://cdn-icons-png.flaticon.com/128/4306/4306907.png" />
                    </div>
                    <div style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Invoicing</div>
             
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Easily create an invoice based on tracked time and expenses.
                Connect with QuickBooks, Xero or FreshBooks
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </Box>
{/* ================================================================= */}

<Box style={{ marginLeft:"10%" ,height:"100vh"}}>
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
            alt="" />         
</Box>     
    </Box>
  );
};

export default MidSection;
