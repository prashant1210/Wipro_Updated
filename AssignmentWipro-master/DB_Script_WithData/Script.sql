USE [AdventureWorks2014]
GO
/****** Object:  Table [dbo].[TrainingDetails]    Script Date: 17/07/2019 9:31:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainingDetails](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[StartDate] [varchar](50) NULL,
	[EndDate] [varchar](50) NULL,
 CONSTRAINT [PK_TrainingDetails] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TrainingDetails] ON 

INSERT [dbo].[TrainingDetails] ([id], [Name], [StartDate], [EndDate]) VALUES (1, N'Angular', N'2019-07-16', N'2019-07-19')
INSERT [dbo].[TrainingDetails] ([id], [Name], [StartDate], [EndDate]) VALUES (2, N'C#', N'2019-07-18', N'2019-07-20')
INSERT [dbo].[TrainingDetails] ([id], [Name], [StartDate], [EndDate]) VALUES (3, N'SqL', N'2019-07-20', N'2019-07-26')
INSERT [dbo].[TrainingDetails] ([id], [Name], [StartDate], [EndDate]) VALUES (4, N'Java', N'2019-07-20', N'2019-07-26')
INSERT [dbo].[TrainingDetails] ([id], [Name], [StartDate], [EndDate]) VALUES (24, N'AWS', N'2019-07-12', N'2019-07-19')
SET IDENTITY_INSERT [dbo].[TrainingDetails] OFF
