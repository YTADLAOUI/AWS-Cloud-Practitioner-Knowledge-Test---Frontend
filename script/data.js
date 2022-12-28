const question = [{
        title: 'Why is AWS more economical than traditional data centers for applications with varying computeworkloads ?',
        type: 'radio',
        options: [{'a':'Amazon EC2 costs are billed on a monthly basis' , 'b':'Users retain full administrative access to their Amazon EC2 instances', 'c':'Amazon EC2 instances can be launched on demand when needed.', 'd':'Users can permanently run enough instances to handle peak workloads.'}],
        answer: 'c',
        repense: "C – The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
    },
    {
        title: 'Which AWS service would simplify the migration of a database to AWS?',
        type: 'radio',
        options: [{'a':'AWS Storage Gateway', 'b':'AWS Database Migration Service (AWS DMS)', 'c':'Amazon EC2', 'd':'Amazon AppStream 2.0'}],
        answer: 'b',
        repense:  "B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases."
    },
    {
        title: 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        type: 'radio',
        options: [{'a':'AWS Config', 'b':'AWS OpsWorks', 'c':'AWS SDK', 'd':'AWS Marketplace'}],
        answer: 'd',
        repense: "D – AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
    },
    {
        title: 'Which AWS networking service enables a company to create a virtual network within AWS?',
        type: 'radio',
        options: [{'a':'AWS Config', 'b':'Amazon Route 53', 'c':'AWS Direct Connect', 'd':'Amazon Virtual Private Cloud (Amazon VPC)'}],
        answer: 'd',
        repense: "D – Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
    },
    {
        title: ' Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        type: 'radio',
        options: [{'a':'Configuring third-party applications', 'b':'Maintaining physical hardware ', 'c':'Securing application access and data','d': 'Managing guest operating systems'}],
        answer: 'b',
        repense:" B – Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model"
    },
    {
        title: 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
        type: 'radio',
        options: [{"a":'AWS Regions', "b":'Edge locations', "c":'Availability Zones', "d":'Virtual Private Cloud (VPC)'}],
        answer: 'b',
        repense: "B – To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. "
    },
    {
        title: 'How would a system administrator add an additional layer of login security to a user\'s AWSManagement Console?',
        type: 'radio',
        options: [{"a":'Use Amazon Cloud Directory',"b": 'Audit AWS Identity and Access Management (IAM) roles',"c": 'Enable multi-factor authentication',"d": 'Enable AWS CloudTrail'}],
        answer: 'c',
        repense: "C – Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
    },
    {
        title: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
        type: 'radio',
        options: [{"a":'AWS Trusted Advisor', "b":'AWS CloudTrail',"c" :'AWS X-Ray',"d" :'AWS Identity and Access Management (AWS IAM)'}],
        answer: 'b',
        repense: "B – AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs."
    },
    {
        title: 'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        type: 'radio',
        options: [{"a":'Amazon Simple Notification Service (Amazon SNS)', "b":'AWS CloudTrail', "c":'AWS Trusted Advisor', "d":'Amazon Route 53'}],
        answer: 'a',
        repense:"A – Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries."
    },
    {
        title: 'Where can a user find information about prohibited actions on the AWS infrastructure?',
        type: 'radio',
        options: [{"a":'AWS Trusted Advisor', "b":'AWS Identity and Access Management (IAM)', "c":'AWS Billing Console',"d": 'AWS Acceptable Use Policy'}],
        answer: 'd',
        repense: "D – The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. "
    },
]
