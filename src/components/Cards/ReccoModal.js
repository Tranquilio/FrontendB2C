import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react'
  
  function ReccoModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure({})
    const construct = props.construct
    const value = props.value
    
    if (construct == "wd" && value == "Poor") {
        return (
        <>
            <div className="font-inter-light text-[15px] ml-5 mt-2">
                <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
            <ModalOverlay />
            <ModalContent maxW="800px">
                <ModalHeader className="font-ptserif">Poor Work Demand</ModalHeader>
                <ModalCloseButton />
                <ModalBody fontSize='sm'>
                <Text className="font-medium text-[16px] font-ptserif">
                    Review the feasibility of completing the workload given. For a start, consider the following to managing workload:
                </Text><br />
                <UnorderedList spacing={2}>
                <ListItem><div className='font-medium text-[16px] font-ptserif'>Prioritize tasks:</div>Make a list of all your tasks and prioritize them based on their importance and deadlines. Focus on completing the most important tasks first.</ListItem>
                <ListItem><div className='font-medium text-[16px] font-ptserif'>Use time management techniques:</div> Try techniques like the Pomodoro Technique, where you work for a set amount of time and then take a short break. This can help you stay focused and prevent burnout.</ListItem>       
                <ListItem><div className='font-medium text-[16px] font-ptserif'>Delegate tasks:</div> If you have too much on your plate, don't be afraid to delegate tasks to others. This will help you focus on the tasks that are most important to you and that you are best suited to do.</ListItem>
                <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate:</div> If you're feeling overwhelmed or have too much on your plate, don't be afraid to speak up. Talk to your manager or coworkers about your workload and see if there are ways to lighten the load.</ListItem>
                </UnorderedList><br/>
                <Text className="font-medium text-[16px] font-ptserif">
                    At the end of the day, managing your workload is important for a sustainable working life.  
                </Text>                
                </ModalBody>
                <ModalFooter>
                <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                    Close
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
    } else if (construct == "wd" && value == "Satisfactory") {
        return (
            <>
                <div className="font-inter-light text-[15px] ml-5 mt-2">
                    <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                </div>
                <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                <ModalOverlay />
                <ModalContent maxW="800px">
                    <ModalHeader className="font-ptserif">Satisfactory Work Demand</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody fontSize='sm'>
                    <Text className="font-medium text-[16px] font-ptserif">
                        If your workload is increasing and you're having trouble managing it, there are several things you can try:
                    </Text><br />
                    <UnorderedList spacing={2}>
                    <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate:</div> Talk to your manager about your workload and see if there are ways to redistribute tasks or prioritize your responsibilities.</ListItem>
                    <ListItem><div className='font-medium text-[16px] font-ptserif'>Set Boundaries:</div> Make sure you're clear about what you can and cannot take on. It's important to set limits so that you don't become overwhelmed.</ListItem>       
                    <ListItem><div className='font-medium text-[16px] font-ptserif'>Use time management techniques:</div> Try techniques like the Pomodoro Technique, where you work for a set amount of time and then take a short break. This can help you stay focused and prevent burnout.</ListItem>
                    <ListItem><div className='font-medium text-[16px] font-ptserif'>Delegate tasks:</div> If you have too much on your plate, don't be afraid to delegate tasks to others. This will help you focus on the tasks that are most important to you and that you are best suited to do.</ListItem>
                    </UnorderedList><br/>
                    <Text className="font-medium text-[16px] font-ptserif">
                        At the end of the day, managing your workload is important for a sustainable working life.  
                    </Text>                
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
            </>
            )
        } else if (construct == "wd" && value == "Good") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Good Work Demand</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Great that your workload is managable. If you ever find that your workload is easy and you're looking for ways to improve, here are a few things you can try:
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Take on additional responsibilities:</div> Talk to your manager about taking on additional tasks or projects. This can help you learn new skills and show your willingness to contribute to the team.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek out new challenges:</div> Look for opportunities to challenge yourself and grow in your role. This could be through training programs, networking events, or by taking on more difficult tasks.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Volunteer for new projects:</div> Offer to help out on new projects or initiatives within your company. This can give you the opportunity to try new things and learn from new experiences.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Remember, to re-evaluate how you feel about your workload from time to time as it often can be subject to change. Take care!
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "wf" && value == "Poor") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Poor Work Flexibility</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Having little to no flexibility at work can be quite frustrating. Here are a few things you can try to address the lack of flexibility:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Talk to your manager:</div> If you feel that you have no flexibility at work, it's important to communicate this to your manager. They may not be aware of your feelings and may be able to help find ways to increase flexibility.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Suggest alternative solutions:</div> If there are specific tasks or responsibilities that are taking up a lot of your time, try suggesting alternative solutions that may be more efficient or allow for more flexibility.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek support:</div> If you're feeling overwhelmed and unable to cope with the lack of flexibility, it may be helpful to seek support from a professional such as a coach or therapist. They can help you develop strategies to manage your workload and improve your overall well-being.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Hope it helps, take care!
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "wf" && value == "Satisfactory") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Satisfactory Work Flexibility</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                            If you already have some flexibility and control over your tasks at work, here are a few things you can try to ensure you leverage the flexibility well:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Prioritize tasks:</div> Make a list of all your tasks and prioritize them based on their importance and deadlines. Focus on completing the most important tasks first.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate:</div> Keep your manager or team informed about your progress and any challenges you're facing. They may be able to help find solutions or offer additional support.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek feedback:</div> Ask for feedback from your manager or coworkers on your performance and areas for improvement. This can help you identify areas where you can grow and develop.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Learn new skills:</div> Take advantage of opportunities to learn new skills, whether through on-the-job training or through external courses or workshops. This can help you become more valuable to your team and organization.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Hope it helps, take care!
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "wf" && value == "Good") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Good Work Flexibility</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you have a lot of flexibility at work, depending on your interests and the policies of your employer. Here are a few ideas:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Learn a new skill:</div> Use your free time to learn a new skill, whether it's related to your job or something personal. This could be through online courses, books, or other resources.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Connect with coworkers:</div> Use your free time to get to know your coworkers better. This could be through lunch breaks, after-work activities, or just chatting during downtimes.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Innovate and better your organisation:</div> Identify problems or opportunities to improve at work, and come up with ideas for how to address them. This can help you to increase visibility and standing in your organisation.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Hope it helps, take care!
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "cr" && value == "Poor") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Poor Coworker Relationships</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                            If you already have some flexibility and control over your tasks at work, here are a few things you can try to ensure you leverage the flexibility well:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate effectively:</div> Listen actively, be clear in your communication, and be open to feedback.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Be trustable and reliable:</div> Follow through on your commitments, arrive on time, and deliver on your promises.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Show respect:</div> Treat others with respect and be willing to accomodate when necessary.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Be open to learning:</div> Be willing to learn from your colleagues and seek out opportunities for growth and development.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By following these tips, you can build stronger working relationships and create a positive work environment.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "cr" && value == "Satisfactory") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Satisfactory Coworker Relationship</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Having better cordial workplace relationships can make you feel more supported and can be beneficial for your career development. Here are a few ways you can make more allies or improve existing wokrplace relationships with colleagues:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Offer help and support:</div> Be willing to offer help and support to coworkers when they need it. Do so even if the tasks do not benefit you directly. This can show that you're a team player and can help build trust.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek out mentors:</div> Look for mentors or more experienced coworkers who can offer guidance and support. Building relationships with these individuals can be beneficial for your career development.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Network:</div> Attend company events and networking events to meet new people and build relationships with coworkers.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By building positive relationships with coworkers, you can create a supportive network of allies at work.                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "cr" && value == "Good") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Good Coworker Relationship</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you're already enjoying good relationship with co-workers,  here are a few additional things you can do to continue building your network and skills:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek out new opportunities:</div> Look for opportunities to connect with new people, such as attending industry events, joining professional organizations, or volunteering.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Mentor others:</div> Consider mentoring others who are looking to build their networks or develop their careers. This can help you give back and also help you develop your own leadership skills.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Participate in professional development activities:</div> Look for opportunities toparticipate in professional development activities, such as conferences, workshops, or training programs. This can help you stay current in your field and expand your network.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By continuing to build your network and skills, you can continue to advance your career and have a positive impact within your organization.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "ol" && value == "Poor") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Poor Organizational Leadership</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you feel that the leadership at your workplace is not effective, it can be challenging and demoralizing. Here are a few things you can try if you feel that the leadership at your workplace is not effective:
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate your concerns:</div> Talk to your manager or HR representative about your concerns. Be specific about the issues you're experiencing and how they're impacting your work. They may be able to offer suggestions or help address your concerns.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek new opportunities:</div> If the situation is not improving and you feel that you're not able to do your best work, it may be time to consider looking for new opportunities elsewhere.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Consider making changes:</div> If you're in a position of leadership, consider making changes to improve the situation. This could involve implementing new policies or processes, or seeking out training or development opportunities for yourself and your team.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Ultimately, it's important to find a workplace where you feel supported and valued. If the leadership at your current workplace is not effective, it may be necessary to explore other options.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "ol" && value == "Satisfactory") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Satisfactory Organizational Leadership</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Great leadership matters especially at work. If you feel that the leadership at your workplace can be improved, here are a few things you can try:
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'> Communicate your concerns:</div> Talk to your manager or HR representative about your concerns. Be specific about the issues you're experiencing and how they're impacting your work. They may be able to offer suggestions or help address your concerns.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'> Offer feedback:</div> If you have ideas for how the leadership at your workplace could be improved, consider offering feedback to your manager or HR representative. Be specific and provide examples to support your suggestions.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Set a good example:</div> As an employee, you can also be a positive influence on the leadership at your workplace by setting a good example for others to follow. This could involve being proactive, taking initiative, and being a positive team player.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By taking a proactive approach and working to improve the leadership at your workplace, you can help create a more positive and productive work environment. This can help you to increase your standing and visibility at work too.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "ol" && value == "Good") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Good Organizational Leadership</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you feel that the leadership at your workplace is effective and supportive, here are a few things you can do to continue building a positive and productive work environment:                        
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate openly and honestly:</div> Maintain open and honest communication with your manager and other leaders in the organization. This can help ensure that everyone is on the same page and can work together effectively.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Offer support:</div> Offer support and assistance to your manager and other leaders when needed. This could involve helping out with tasks or providing guidance and expertise.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Set a good example:</div> As an employee, you can also be a positive influence on the leadership at your workplace by setting a good example for others to follow. This could involve being proactive, taking initiative, and being a positive team player.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By working together and supporting the leadership, may you advance your visibility, network and career!                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "c" && value == "Poor") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Poor Compensation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you feel that your compensation is inadequate and you're not receiving recognition for your work, it can be particularly demoralizing. Here are a few things you can try if you're facing this situation:                       
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Communicate your concerns:</div> Talk to your manager or HR representative about your concerns. Be specific about the issues you're experiencing and how they're impacting your work. They may be able to offer suggestions or help address your concerns.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek out additional support:</div> If you're struggling to cope with the situation, it may be helpful to seek support from a professional such as a coach or therapist. They can help you develop strategies to manage your workload and improve your overall well-being.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek new opportunities:</div> If the situation is not improving and you feel that you're not able to do your best work, it may be time to consider looking for new opportunities elsewhere.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek recognition for your work:</div> If you're not receiving recognition for your work, consider seeking out opportunities to showcase your achievements. This could involve presenting your work at company meetings, sharing your accomplishments on social media, or seeking out opportunities to lead projects or initiatives.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        It's important to find a workplace where you feel valued and fairly compensated. If you feel that your pay is inadequate and you're not receiving recognition, it may be necessary to explore other options.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "c" && value == "Satisfactory") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Satisfactory Compensation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Asking for better compensation and recognition at work may be something to explore, but can also be challenging. It is important to advocate for yourself and your contributions. Here are a few steps you can follow when asking for better compensation and recognition at work:
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'></div> Prepare your case: Before approaching your manager or HR representative, take some time to prepare your case. This could involve researching industry standards, gathering data on your contributions and achievements, and identifying specific areas where you feel you deserve better compensation or recognition.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'></div> Choose the right time and place: Consider the best time and place to have the conversation. It's generally best to schedule a meeting with your manager or HR representative, rather than trying to have the conversation spontaneously.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'></div> Communicate your concerns: During the conversation, be specific about the issues you're experiencing and how they're impacting your work. Explain why you feel you deserve better compensation or recognition, and provide examples to support your case.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'></div> Build additional income streams: If you have a particular skill or hobby that you're passionate about, consider starting a side hustle. This could involve offering services such as consulting, freelance writing, or web design, or selling products such as handmade crafts or digital products. Do ensure it does not cause a conflict of interests with your current employer as it can have employment ramifications.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        Ultimately, it is important to advocate for yourself and your contributions. All the best!
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        } else if (construct == "c" && value == "Good") {
            return (
                <>
                    <div className="font-inter-light text-[15px] ml-5 mt-2">
                        <Button colorScheme='black' variant='outline' onClick={onOpen} size="xs" height='32px' width="150px">Get actionable insights</Button>
                    </div>
                    <Modal isOpen={isOpen} onClose={onClose} size='[14px]'>
                    <ModalOverlay />
                    <ModalContent maxW="800px">
                        <ModalHeader className="font-ptserif">Good Compensation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody fontSize='sm'>
                        <Text className="font-medium text-[16px] font-ptserif">
                        If you feel that you are paid well and have the deserved recognition at your current job, there are a few things you can do to continue building your career and increasing your value to your organization:
                        </Text><br />
                        <UnorderedList spacing={2}>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Seek out new opportunities for growth:</div> Look for opportunities to learn and grow within your role. This could involve seeking out training or development opportunities, or taking on additional responsibilities.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Offer your expertise:</div> Share your knowledge and expertise with others, either within your team or organization or through external professional development opportunities.</ListItem>       
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Build your network:</div> Attend industry events and networking events to build relationships and expand your professional network.</ListItem>
                        <ListItem><div className='font-medium text-[16px] font-ptserif'>Consider further education:</div> If you're interested in furthering your education, consider pursuing a degree or certification in your field. This can help you develop new skills and increase your value to your organization.</ListItem>
                        </UnorderedList><br/>
                        <Text className="font-medium text-[16px] font-ptserif">
                        By continuing to build your skills and expertise, you can increase your value to your organization and advance your career.
                        </Text>                
                        </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='green' variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </>
            )
        }


  }
  
  export default ReccoModal;
