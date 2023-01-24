export default function generateLetter(req, res) {
	if (req.method === 'POST') {
		setTimeout(() => {
			res.status(200).json({
				data: 'Dear Visa Officer,\nI am writing to apply for a student visa to travel to the United States from China. My name is Jiajin Ou, and I am currently a student. I plan to travel on February 10, 2023 and return on March 10, 2023. The reason for my travel is to attend college in the United States. I have been accepted into a program at a reputable institution and I am eager to begin my studies in this world-renowned educational system. I understand that obtaining a student visa can be a challenging process, but I assure you that I am fully committed to meeting all requirements and providing any necessary documentation. As a student, I have no dependents or ties to my home country that would impede my ability to return after my studies. I have also made arrangements for sufficient financial support during my stay in the United States. I understand the importance of maintaining good standing during my time in the United States and I am committed to following all laws and regulations while in the country. Thank you for your time and consideration. I look forward to the opportunity to study in the United States and contribute to the diverse community of international students. If you have any questions or require additional information, please do not hesitate to contact me at jiajin@gmail.com.\nSincerely,\nJiajin Ou',
			});
		}, 2000);
	}
}
